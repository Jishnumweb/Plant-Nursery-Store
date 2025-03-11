import { useDispatch } from "react-redux";
import { emptyCart } from "../redux/Features/Cartslice";

export default function Payment() {

  const goToHome = () => {
    window.location.href = "/"; // Redirect to home
  };

  const dispatch = useDispatch()

  return (
  
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <div style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
        }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="green"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.97 11.03a.75.75 0 0 0 1.06 0l4.5-4.5a.75.75 0 0 0-1.06-1.06L7.5 9.44 5.53 7.47a.75.75 0 0 0-1.06 1.06l2.5 2.5z"/>
          </svg>
          <h2 style={{ marginTop: "10px", fontSize: "18px", fontWeight: "bold" }}>Payment Successful!</h2>
          <p style={{ color: "gray", marginTop: "5px" }}>Thank you for your purchase.</p>
          <div style={{ marginTop: "15px", display: "flex", gap: "10px", justifyContent: "center" }}>

            <button
              onClick={()=>{
                dispatch(emptyCart());
                goToHome()
              }}
              style={{
                padding: "8px 16px",
                background: "green",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
  );
}
