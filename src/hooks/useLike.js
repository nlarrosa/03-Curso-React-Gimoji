import React, { useState } from 'react';



export const useLike = (initValue) => {

    const [likes, setLikes] = useState(initValue);


    const onClickLike = () => {
        setLikes(prev => prev + 1);
    }



  return {
    likes,
    onClickLike
  }
}
