import { GrFormPrevious, GrFormNext } from 'react-icons/gr'

export const bannerSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoPlay: true
}

export const paginationSettings = {
  pageRangeDisplayed: 3,
  marginPagesDisplayed: 2,
  renderOnZeroPageCount: () => null,
  previousLabel: <GrFormPrevious className="text-xl" />,
  nextLabel: <GrFormNext className="text-xl" />
}
