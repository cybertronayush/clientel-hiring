import React, { useEffect, useContext, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, deleteTodos } from "../../redux/slice/todo";
import { NotificationBannerContext } from "../NotificationBanner/NotificationContext";
import "./index.css";

const TodoCard = lazy(() => import("../TodoCard"));

const Home = () => {
    const { setNotifyMessage } = useContext(NotificationBannerContext);

    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const handleDeleteTodo = (todoId) => {
        dispatch(deleteTodos(todoId));
        setNotifyMessage("Task Romoved", "success", 1000);
    };

    useEffect(() => {
        dispatch(fetchTodos());
        setNotifyMessage("Task Loaded!", "success", 1000);
    }, [dispatch]);

    return (
        <div className="bg-grey">
            <div className="block w-full text-center font-bold text-xl bg-gray-50 text-gray-700 rounded-md p-2">
                Todo-Task List
            </div>
            <section className="bg-gray-50 py-8">
                <div className="container mx-auto grid grid-cols-4 gap-4">
                    {state.todo?.data &&
                        state.todo.data.map((product) => (
                            <Suspense
                                fallback={
                                    <div role="status">
                                        <svg
                                            aria-hidden="true"
                                            className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                            viewBox="0 0 100 101"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        ></svg>
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                }
                                key={product.id} // Add the key prop with a unique identifier
                            >
                                <TodoCard data={product} handleDeleteTodo={handleDeleteTodo} />
                            </Suspense>
                        ))}
                    {state?.todo?.data?.length === 0 && (
                        <div className="block w-full text-center font-bold text-xl bg-gray-50 text-gray-700 rounded-md p-2">
                            No Todo Found
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Home;
