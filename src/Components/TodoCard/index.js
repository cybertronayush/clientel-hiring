import React from "react";
import { GiCancel } from "react-icons/gi";
import { MdDoneOutline } from "react-icons/md";
import "./index.css";

const TodoCard = ({ data, handleDeleteTodo }) => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="product-card relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="card-content relative px-7 py-2 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                    {data.completed === true ? (
                        <MdDoneOutline color={"green"} size={15} />
                    ) : (
                        <GiCancel color={"red"} size={15} />
                    )}
                    <div className="space-y-2">
                        <p className="text-slate-800">{data?.title}</p>
                        <button
                            onClick={() => {
                                handleDeleteTodo(data?.id);
                            }}
                            href="https://braydoncoyer.dev/blog/tailwind-gradients-how-to-make-a-glowing-gradient-background"
                            className="block text-red-400 group-hover:text-slate-800 transition duration-200"
                            target="_blank"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoCard;
