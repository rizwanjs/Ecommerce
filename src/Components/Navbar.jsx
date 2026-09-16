function Navbar () {
return(
    <>
    <nav className="flex items-center justify-between bg-black px-6 py-4 text-white">
        <h1 className="text-2xl font-bold">
            My Store
        </h1>

        <div className="flex gap-6">
            <a className="hover:text-gray-300" href="/">Home</a>
            <a className="hover:text-gray-300" href="/products">Products</a>
            <a className="hover:text-gray-300" href="/cart">Cart</a>
        </div>
    </nav>
    </>
)
}
export default Navbar