import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAxios } from './hooks/useAxios';

import { dataComments } from './data/Comments';
import { Loading } from './components/ui/Loading';



export const GimojiDetail = () => {

  const apiKey = import.meta.env.VITE_APIKEY_GIPHY;
  const { gifId } = useParams();
  const [status, setStatus] = useState(false);
  const { dataApi, isLoading } = useAxios(`${gifId}?api_key=${apiKey}&rating=g`, 'get', null, status);
  const filterInputRef = useRef(null);
  const [comments, setComments] = useState(dataComments);


  const handleFilterChange = () => {
     const newComments = comments.filter((item) => {
        return item.body.toLowerCase().includes(filterInputRef.current.value.toLowerCase())
     });
  };



  return (
  <section>
    <div className="container my-5 py-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-12 col-lg-10">
          <div className="card text-dark">
              <div className="card-body p-4">
                <img src={ dataApi.images?.original.url} width={'100%'} style={{ marginBottom: 20}}/>
                <h4 className="mb-0">Comentarios Recientes</h4>
                <p className="fw-light mb-4 pb-2">Ultimos comentarios sobre este gif</p>

                { comments.map( comment => (
                  <div key={comment.id} className="d-flex flex-start">
                    <div>
                      <h6 className="fw-bold">{ comment.email }</h6>
                      <div className="d-flex align-items-center">
                        <a href="#!" className="link-muted"><i className="fas fa-pencil-alt ms-2"></i></a>
                        <a href="#!" className="link-muted"><i className="fas fa-redo-alt ms-2"></i></a>
                        <a href="#!" className="link-muted"><i className="fas fa-heart ms-2"></i></a>
                      </div>
                      <p className="mb-0">
                        { comment.body}
                      </p>
                      <hr className="my-10" />
                    </div>
                  </div>
                ))}
              </div>

              <input
                style={{
                  height: 40
                }}
                type="text"
                placeholder="Filter by username"
                ref={filterInputRef}
                onChange={handleFilterChange}
              />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
