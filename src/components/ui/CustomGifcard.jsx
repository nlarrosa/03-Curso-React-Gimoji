import React from 'react'
import { CustomLike } from './CustomLike';
import { CustomFavorite } from './CustomFavorite';


const noImage = import.meta.env.VITE_NO_IMAGE;

export const CustomGifcard = ({ dataItem }) => {

   

  return (
    <div className="col">
        <div className="card shadow-sm">
            <img src={dataItem.images.fixed_width.url} alt="Girl in a jacket" width={'100%'}  height={300} style={{ display: 'block'}}/>
            <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                    <CustomLike id={dataItem.id}/>
                    <CustomFavorite />
                </div>
                <small className="text-body-secondary">cod: { dataItem.id.substr(0, 5)}</small>
            </div>
            </div>
        </div>
    </div>
  )
}
