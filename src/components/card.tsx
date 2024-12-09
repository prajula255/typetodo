import React, { FC } from "react";

interface CardProps{
todo:string,
onDone?:()=>void,
onDelete:()=>void
}

const Card:FC <CardProps> =({ todo, onDone, onDelete })=> {
    return (
        <>
            <div className="card w-full" >
                <div className="card-body">
                    <p className="card-text">{todo}</p>
                    {
                        onDone && <a href="#" className="btn btn-primary" onClick={onDone}><i className="fa-solid fa-check"></i></a>
                    }
                    <a href="#" className="ms-2 btn btn-primary" onClick={onDelete}><i className="fa-solid fa-trash"></i></a>

                </div>
            </div>
        </>
    );
}
export default Card;