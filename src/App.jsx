
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import BannerSlider from "./components/BannerSlider";
import DataApi from "./components/DataApi";
import ScrollButton from "./components/ScrollButton";



function App() {
  return (
    <>
      <Navigation />
      <BannerSlider />
      <DataApi />
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
      <ScrollButton/>
      <Footer />
    </>
  )
}


export default App;