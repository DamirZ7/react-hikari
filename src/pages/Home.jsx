import React, { useState, useEffect, useContext } from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'

import { setCategoryId } from '../redux/slices/filterSlice'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'
import Pagination from '../components/Pagination'
import { SearchContext } from '../App'

const Home = () => {
  const dispatch = useDispatch()
  const { categoryId, sort } = useSelector((state) => state.filter)

  // const sortType = useSelector((state) => state.filter.sort.sortProperty)

  const { searchValue } = useContext(SearchContext)
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  // const [categoryId, setCategoryId] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  // const [sortType, setSortType] = useState({ name: 'популярности', sortProperty: 'rating' })
  const onChangeCategory = (id) => {
    console.log(id)
    dispatch(setCategoryId(id))
  }

  useEffect(() => {
    const categoryBy = categoryId > 0 ? `category=${categoryId}` : ''
    const search = searchValue ? `&search=${searchValue}` : ''
    const sortBy = sort.sortProperty.replace('-', '')
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
    setIsLoading(true)
    fetch(
      `https://628f0d9a0e69410599d480ad.mockapi.io/items?page=${currentPage}&limit=4&${categoryBy}&sortBy=${sortBy}&order=${order}${search}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setItems(data)
        setIsLoading(false)
      })
    window.scrollTo(0, 0)
  }, [categoryId, sort.sortProperty, searchValue, currentPage])

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
  const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />)

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories value={categoryId} onChangeCategory={(id) => onChangeCategory(id)} />
        <Sort />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>{isLoading ? skeletons : pizzas}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  )
}

export default Home
