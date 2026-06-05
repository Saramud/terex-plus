import { all, name, propertiesCommon } from './data'
import type { EquipmentCategory, PropertyKey } from './types'

function buildCard(cat: EquipmentCategory, i: number): HTMLElement {
  const card = document.createElement('a')
  card.className = 'card border-warning'
  card.href = cat.link[i]

  const inner = document.createElement('div')
  inner.className = 'border-warning text-center'

  const img = document.createElement('img')
  img.className = 'card-image'
  img.src = cat.img[i]
  img.alt = cat.title[i]
  img.loading = 'lazy'

  const title = document.createElement('h3')
  title.className = 'text-dark'
  title.textContent = cat.title[i]

  const header = document.createElement('div')
  header.className = 'card-header'
  header.textContent = `от ${cat.price[i]} р. за смену`

  const tbody = document.createElement('tbody')
  const maxProps = Math.min(4, cat.properties.length)
  for (let j = 0; j < maxProps; j++) {
    const prop = cat.properties[j] as PropertyKey
    const value = (cat[prop] as string[])[i] ?? '—'
    const tr = document.createElement('tr')
    tr.innerHTML = `<td class="text-dark text-left">${propertiesCommon[prop]}</td><td class="text-dark text-right">${value}</td>`
    tbody.appendChild(tr)
  }

  const table = document.createElement('table')
  table.className = 'table table-sm table-hover'
  table.appendChild(tbody)

  const cardBody = document.createElement('div')
  cardBody.className = 'card-body'
  cardBody.appendChild(table)

  const btn = document.createElement('div')
  btn.className = 'btn btn-information'
  btn.innerHTML = `<a href="${cat.link[i]}">Взять в аренду</a>`
  cardBody.appendChild(btn)

  inner.appendChild(img)
  inner.appendChild(title)
  inner.appendChild(header)
  inner.appendChild(cardBody)
  card.appendChild(inner)

  return card
}

function renderCatalog(cat: EquipmentCategory): void {
  const container = document.querySelector<HTMLElement>('.technics__menu-item')
  if (!container) return

  for (let i = 0; i < cat.img.length; i++) {
    container.appendChild(buildCard(cat, i))
  }
}

function clearCatalog(): void {
  document.querySelectorAll('a.card').forEach(el => el.remove())
}

function initMainPage(): void {
  const selected = localStorage.getItem('selected')
  const defaultKey = (selected === null || selected === 'allTechnics') ? 'autokranM' : selected
  const defaultCat = all[defaultKey] ?? all.autokranM

  const activeBtn = document.getElementById(defaultKey === 'allTechnics' ? 'allTechnics' : defaultKey)
  activeBtn?.classList.add('techs-active')

  renderCatalog(defaultCat)
}

function initAllTechnicsPage(): void {
  const selected = localStorage.getItem('selected')

  if (selected === 'allTechnics') {
    document.getElementById('allTechnics')?.classList.add('techs-active')
    for (const key of Object.keys(all)) {
      renderCatalog(all[key])
    }
  } else {
    const key = selected ?? 'autokranM'
    document.getElementById(key)?.classList.add('techs-active')
    renderCatalog(all[key] ?? all.autokranM)
  }
}

function initCategoryPage(elementId: string, catalogKey: string): void {
  document.getElementById(elementId)?.classList.add('techs-active')
  const cat = all[catalogKey]
  if (cat) renderCatalog(cat)
}

function initTechnicDetailPage(): void {
  const techEl = document.querySelector<HTMLElement>('.tech')
  if (!techEl) return

  const nameTech = techEl.id
  const meta = name[nameTech]
  if (!meta) return

  const img = document.createElement('img')
  img.src = meta[1]
  img.alt = meta[0]
  techEl.appendChild(img)

  const partWord = nameTech.slice(0, 4)
  const relatedKeys = Object.keys(name).filter(k => k.startsWith(partWord))

  const ul = document.createElement('ul')
  ul.className = 'technic__selector'

  for (const techKey of relatedKeys) {
    const li = document.createElement('li')
    li.className = nameTech === techKey ? 'btn technic_active' : 'btn btn-light technic_passive'

    const a = document.createElement('a')
    a.className = 'nav-link'
    a.href = name[techKey][2]
    a.textContent = name[techKey][0]

    li.appendChild(a)
    ul.appendChild(li)
  }

  const navMenu = document.querySelector('.nav-menu')
  navMenu?.appendChild(ul)

  const cardBody = document.querySelector<HTMLElement>('.card-body')
  if (!cardBody) return

  const typeOfTech = cardBody.id
  const catData = all[typeOfTech]
  if (!catData) return

  const idx = catData.title.indexOf(meta[0])
  if (idx === -1) return

  const tbody = document.createElement('tbody')
  tbody.className = 'tbody'

  for (let j = 0; j < catData.properties.length; j++) {
    const prop = catData.properties[j] as PropertyKey
    const value = (catData[prop] as string[])[idx] ?? '—'
    const tr = document.createElement('tr')
    tr.innerHTML = `<td class="text-dark text-left">${propertiesCommon[prop]}</td><th class="text-dark text-right">${value}</th>`
    tbody.appendChild(tr)
  }

  const priceTr = document.createElement('tr')
  priceTr.className = 'bg-secondary'
  priceTr.innerHTML = `<th class="text-left">СТОИМОСТЬ</th><th class="text-right">от ${catData.price[idx]} руб. ЗА СМЕНУ<br>(8 ЧАСОВ)</th>`
  tbody.appendChild(priceTr)

  const table = document.createElement('table')
  table.className = 'table table-hover'
  table.appendChild(tbody)

  cardBody.appendChild(table)
}

export function initFilter(): void {
  if (document.getElementById('mainPageCatalog')) {
    initMainPage()
  } else if (document.getElementById('allTechnics')) {
    initAllTechnicsPage()
  } else if (document.getElementById('autokrans')) {
    initCategoryPage('autokrans', 'autokranM')
  } else if (document.getElementById('excavatory-gusenichnye')) {
    initCategoryPage('excavatory-gusenichnye', 'ekskGusenichM')
  } else if (document.getElementById('excavatory-kolesnye')) {
    initCategoryPage('excavatory-kolesnye', 'ekskKolesM')
  } else if (document.getElementById('excavatory-pogruzchiki')) {
    initCategoryPage('excavatory-pogruzchiki', 'ekskPogrM')
  } else if (document.getElementById('frontalnye-pogruzchiki')) {
    initCategoryPage('frontalnye-pogruzchiki', 'frontPogruzM')
  } else if (document.getElementById('mini-excavatory')) {
    initCategoryPage('mini-excavatory', 'mineM')
  } else if (document.getElementById('mini-pogruzchiki')) {
    initCategoryPage('mini-pogruzchiki', 'minPogruzM')
  } else if (document.getElementById('manipulators')) {
    initCategoryPage('manipulators', 'mnpltrM')
  } else if (document.getElementById('samosavls')) {
    initCategoryPage('samosavls', 'samosvalM')
  } else if (document.getElementById('teleskopicheskie-pogruzchiki')) {
    initCategoryPage('teleskopicheskie-pogruzchiki', 'teleskPogrM')
  }

  initTechnicDetailPage()

  document.querySelectorAll<HTMLElement>('.techs').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.id
      localStorage.setItem('selected', id)

      document.querySelectorAll('.techs.techs-active').forEach(el => el.classList.remove('techs-active'))
      btn.classList.add('techs-active')
      clearCatalog()

      if (id === 'allTechnics') {
        for (const key of Object.keys(all)) renderCatalog(all[key])
      } else {
        const cat = all[id]
        if (cat) renderCatalog(cat)
      }
    })
  })
}
