
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Offcanvasexample() {
const carts = useSelector(state => state.cart.value)
  const navigate = useNavigate()

  return (
    <>
        <div className="flex mt-[10px]" onClick={()=>navigate("/checkout")}>
          <FaShoppingCart />
          <p className='text-[#0E461CB3] font-medium text-[13px] lg:text-[15px]'>{carts.length}</p>

        </div>

    </>
  );
}

export default Offcanvasexample;
