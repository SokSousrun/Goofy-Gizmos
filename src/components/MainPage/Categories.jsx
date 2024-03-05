import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "https://tkcustomcomputer.com/assets/uploads/menus/c472584124c3515291d1e04f6723d4c1.png",
      cateName: "Laptop",
    },
    {
      cateImg: "https://tkcustomcomputer.com/assets/uploads/menus/7e1ed178e5d9f9f0e0666af1cc42bd51.svg",
      cateName: "PC Hardware",
    },
    {
      cateImg: "https://tkcustomcomputer.com/assets/uploads/menus/4c4b6269cf3ba46afeb3e57297674933.png",
      cateName: "Peripharals",
    },
    {
      cateImg: "https://tkcustomcomputer.com/assets/uploads/menus/a71085979573d4812bc880df5eb68b65.svg",
      cateName: "Accessories",
    },
    {
      cateImg: "https://tkcustomcomputer.com/assets/uploads/menus/b87386989ff5d0de32188afabf19856f.png",
      cateName: "PC Sets",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
