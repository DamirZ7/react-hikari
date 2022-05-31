import React, { useState } from 'react'

function Categories({ value, onChangeCategory }) {
  // const [activeIndex, setActiveIndex] = useState(0)

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  // const onClickCategory = (index) => {
  //   setActiveIndex(index)
  // }

  return (
    <div className='categories'>
      <ul>
        {categories.map((it, i) => (
          <li key={i} onClick={() => onChangeCategory(i)} className={value === i ? 'active' : ''}>
            {it}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
