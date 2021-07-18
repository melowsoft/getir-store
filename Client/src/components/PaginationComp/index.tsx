import React from 'react'
import ReactPaginate from 'react-paginate'
import {Container, NextWrap, PrevWrap} from "./styles"
import {ReactComponent as Next} from "../../assets/svg/next.svg"
import {ReactComponent as Prev} from "../../assets/svg/prev.svg"

const NextButton = () => (
  <NextWrap>
   <div>Next</div> <Next /> 
  </NextWrap>
)
const PrevButton = () => (
  <PrevWrap>
    <Prev /> <div>Prev</div>
  </PrevWrap>
)

interface Props {
  onChange({selected}: any): number;
  pageCount: number;
}

export const PaginationComp: React.FC<Props> = ({onChange, pageCount}: Props) => {
 return (
 <Container>
        <ReactPaginate
          previousLabel={<PrevButton />}
          nextLabel={<NextButton />}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={onChange}
          containerClassName={'pagination'}
          previousLinkClassName={"prev-link-class"}
          nextLinkClassName={"next-link-class"}
          activeClassName={'page-active'}
        />
  </Container>
  )
}