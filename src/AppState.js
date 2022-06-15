import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  cars: [
    // NOTE fake data until you get data
    // {make: 'honda', model: 'car', year: 2022, price: 50000, img: 'https://di-uploads-pod14.dealerinspire.com/hondaeastcincy/uploads/2020/12/21-accord-hybrid.jpg', color: '#fff', description: "it's a car yo, buy it.  I could really use the money to buy gas."},
    // {make: 'honda', model: 'car', year: 2022, price: 50000, img: 'https://di-uploads-pod14.dealerinspire.com/hondaeastcincy/uploads/2020/12/21-accord-hybrid.jpg', color: '#fff', description: "it's a car yo, buy it.  I could really use the money to buy gas."},
    // {make: 'honda', model: 'car', year: 2022, price: 50000, img: 'https://di-uploads-pod14.dealerinspire.com/hondaeastcincy/uploads/2020/12/21-accord-hybrid.jpg', color: '#fff', description: "it's a car yo, buy it.  I could really use the money to buy gas."}
  ],
  houses: [
    {name: 'hammock', floors: 1 , price: 25, bedrooms: 1, bathrooms: 0, img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yhgNySkH_PbSF_4svpFaSwHaHa%26pid%3DApi&f=1'},
    {name: 'hammock2.0', floors: 3 , price: 50, bedrooms: 3, bathrooms: 1, img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yhgNySkH_PbSF_4svpFaSwHaHa%26pid%3DApi&f=1'}
  ]
})
