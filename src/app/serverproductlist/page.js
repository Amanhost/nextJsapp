import Link from "next/link";
import ClientComp from "./ClientComp";
async function getdata() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}

const Serverproductlist = async () => {
  const data = await getdata();
  console.log(data);
  return (
    <div>
      <Link href="/">Home</Link>
      {data.map((value, index) => (
        <div key={index}>
          <div>
            {value.brand},price{value.price}
          </div>
          <ClientComp value={value} />
        </div>
      ))}
    </div>
  );
};

export default Serverproductlist;
