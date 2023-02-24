import { useEffect, useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Navigation from "./Navigation";
import Footer from "./Footer";
import Spinner from "./Spinner";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function App({ id }) {
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
    </div>;
  } else {
    return (
      <>
        <Navigation />

        <Carousel
        className="mt-6 mb-6 px-20"
          showDots={true}
          autoPlay
          infinite
          responsive={responsive}
          sliderClass='flex items-center gap-4 justify-center '
        >

          <img className="h-auto w-full object-cover" src="https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg" alt="" />

          <img className="h-auto w-full object-cover" src="https://img.freepik.com/free-vector/gradient-mountain-landscape_52683-77407.jpg" alt="" />

          <img className="h-auto w-full object-cover" src="https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg" alt="" />

          <img className="h-auto w-full object-cover" src="https://img.freepik.com/free-vector/gradient-mountain-landscape_52683-77407.jpg" alt="" />

        </Carousel>
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

        <div class="flex  flex-col md:flex-col lg:flex-row  gap-6 px-6 mb-6 mt-6">
          <div class="basis-1/2">
            <img className="w-full h-auto object-cover" src='https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80' />
          </div>
          <div class="basis-1/2  ml-auto">
            <h2 className="text-xl font-medium leading-10 text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus minus nostrum dolores tempore, magnam totam in est, autem numquam ipsa dolor deleniti alias debitis optio vero commodi iure explicabo voluptatem?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus minus nostrum dolores tempore, magnam totam in est, autem numquam ipsa dolor deleniti alias debitis optio vero commodi iure explicabo voluptatem?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus minus nostrum dolores tempore, magnam totam in est, autem numquam ipsa dolor deleniti alias debitis optio vero commodi iure explicabo voluptatem?ipsa dolor deleniti alias debitis optio vero commodi iure explicabo voluptatem?
            </h2>
          </div>
        </div>
        <div class="flex  flex-col md:flex-col lg:flex-row-reverse  gap-6 px-6 mb-6 mt-6">
          <div class="basis-1/2">
            <img className="w-full h-auto object-cover" src='https://images.unsplash.com/photo-1618588507085-c79565432917?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80' />
          </div>
          <div class="basis-1/2  ml-auto">
            <h2 className="text-xl font-medium leading-10 text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus minus nostrum dolores tempore, magnam totam in est, autem numquam ipsa dolor deleniti alias debitis optio vero commodi iure explicabo voluptatem?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus minus nostrum dolores tempore, magnam totam in est, autem numquam ipsa dolor deleniti alias debitis optio vero commodi iure explicabo voluptatem?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus minus nostrum dolores tempore, magnam totam in est, autem numquam ipsa dolor deleniti alias debitis optio vero commodi iure explicabo
            </h2>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default App;