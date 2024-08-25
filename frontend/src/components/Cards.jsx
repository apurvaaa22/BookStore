import React from 'react'

const Cards = ({ item }) => {

    return (
        <>
            <div className='mt-4 my-3 p-3'>
                <div className="card bg-base-100 w-92 m-auto shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
                    <figure>
                        <img
                            src={item.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions flex justify-between pt-4">
                            <div className="badge badge-outline p-3 rounded-full border-[1px]">${item.price}</div>
                            <button className="badge badge-outline bg-transparent p-3 rounded-full border-[1px] text-black hover:bg-pink-500  hover:text-white duration-200  ">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
