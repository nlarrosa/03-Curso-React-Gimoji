import { useEffect, useState } from 'react'

export const usePaginate = (initialOffset, limit, pageData) => {

    const [offset, setOffset] = useState(initialOffset);
    const [page, setPage] = useState(pageData);

    useEffect(() => {
        setPage(1);
    }, [pageData])


    const onNext = () => {
        setOffset( prev => prev + limit);
        setPage(page + 1);
    }


    const onPrev = () => {

        setOffset( prev => {
            if(prev <= 0){
                setPage(pageData)
                return 0
            } else {
                setPage(page-1);
                return prev - limit;
            }
        });
    }


  return {
    offset,
    page,
    onNext,
    onPrev
  }
}
