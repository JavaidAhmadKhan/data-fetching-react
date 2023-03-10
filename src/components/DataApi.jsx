import { useEffect, useState } from "react";
import Spinner from "./Spinner";

const DataApi = ({ id }) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setUsers(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>
            <Spinner />
        </div>
    } else {

        return (
            <div>
                <section className=" p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
                        {users.map(user => (
                            <div key={user.id} className="bg-blue-500 text-white shadow-xl p-4 rounded">
                                <div className="flex items-center justify-center">
                                    <img
                                        className="flex object-contain items-center"
                                        src={`https://robohash.org/${id}?set=set2&size=220x220`}
                                        alt="robots"
                                    />
                                </div>
                                <div className="text-md  text-center font-medium leading-8 grid items-end mt-6">
                                    <h2>Name: {user.name}</h2>
                                    <h2>Email: {user.email}</h2>
                                    <h2>Address: {user.address.street}</h2>
                                    <h2>City: {user.address.city}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        )
    }
}

export default DataApi;