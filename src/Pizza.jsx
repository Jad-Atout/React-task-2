
import {useEffect, useState} from "react";
import style from "./Pizza.module.css"

export default  function Pizza() {
    const [pizzaList,setPizza]=useState([])
    const products= async ()=>{
        const response = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza')
        const data = await response.json()
        setPizza(data.recipes)

    }
    useEffect(() => {
        products()
    }, []);


    return (
        <>
            <div className='container-lg'>
                <div className='row justify-content-center'>
            {pizzaList.map((e)=> {
              return(
                  <div className={`${style.card} col-lg-3 col-md-4 col-sm-6 flex-md-grow-1 flex-lg-grow-0`}  key={e.recipe_id}>
                      <img src={e.image_url} className={`card-img-top img-fluid ratio-4x3`} alt="Pizza image"/>
                      <div className="card-body">
                          <h5 className="card-title">{e.title.split(' ').slice(0,3).join(" ")}</h5>
                          <p className="card-text">
                              {e.publisher}
                          </p>
                          <a href={e.source_url} className="btn btn-primary">Publisher</a>
                      </div>
                  </div>

              )
            })}
                </div>
            </div>
        </>
    );
}