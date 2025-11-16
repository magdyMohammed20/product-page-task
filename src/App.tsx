import Breadcrumbs from "./components/Home/Breadcrumbs"
import Header from "./components/Home/Header/Header"
import Products from "./components/Home/Products/Products";
import Review from "./components/Home/Review/Review";
import { useFetchProduct } from "./hooks/useFetchProduct";
import Loading from "./shared/Loading";

function App() {
  const name = "Sneakers12"
  const { data, isLoading, error } = useFetchProduct(name);

  if (isLoading) return <Loading />;
  if (error) return <div className="p-8 text-red-600">Error loading product</div>;
  if (!data) return null;

  return (
    <main className="font-medium">
      <div className="container mx-auto px-5">
        <Breadcrumbs name={data.name} />
        <Header data={data} />
        <Products title="Related Product" border />
        <Review />
        <Products title="Popular this week" />
      </div>
    </main>

  )
}

export default App
