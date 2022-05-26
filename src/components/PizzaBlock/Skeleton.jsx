import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = (props) => (
  <ContentLoader
    className='pizza-block'
    speed={2}
    width={280}
    height={500}
    viewBox='0 0 280 500'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}>
    <circle cx='139' cy='147' r='125' />
    <rect x='1' y='291' rx='10' ry='10' width='280' height='21' />
    <rect x='193' y='307' rx='0' ry='0' width='20' height='4' />
    <rect x='2' y='327' rx='10' ry='10' width='280' height='88' />
    <rect x='186' y='352' rx='0' ry='0' width='1' height='0' />
    <rect x='7' y='436' rx='10' ry='10' width='95' height='30' />
    <rect x='127' y='427' rx='25' ry='25' width='152' height='45' />
  </ContentLoader>
)

export default Skeleton
