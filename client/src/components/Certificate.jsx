import { motion } from "framer-motion"

const Certificate = ({ username }) => {
  const date = new Date().toLocaleDateString()

  return (
    <motion.div
      id="certificate"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      style={{
        width: "1000px",
        margin: "auto",
        padding: "40px",
        background: "#ffffff",
        color: "#000000",
        border: "10px solid #ec4899",
        borderRadius: "12px",
        fontFamily: "serif",
        textAlign: "center"
      }}
    >
      {/* LOGO */}
      <div style={{ marginBottom: "10px" }}>
        <img src="../src/assets/r2.0_logo.png" alt="logo" style={{ width: "100px", margin: "0 auto" }} />
      </div>

      {/* TITLE */}
      <h1 style={{ fontSize: "28px", color: "#ec4899" }}>
        CERTIFICATE OF COMPLETION
      </h1>

      <p>This is proudly presented to</p>

      {/* NAME */}
      <h2 style={{ fontSize: "26px", marginTop: "10px", textDecoration: "underline" }}>
        {username}
      </h2>

      <p style={{ marginTop: "10px" }}>
        for successfully completing the
      </p>

      <p style={{ fontSize: "18px", color: "#ec4899", fontWeight: "bold" }}>
        Raksha Digital Women Safety Course
      </p>

      {/* DETAILS */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "30px" }}>
        <div>
          <p><b>Date</b></p>
          <p>{date}</p>
        </div>

        <div>
          <p><b>Certificate ID</b></p>
          <p>RAK-{Math.floor(Math.random() * 100000)}</p>
        </div>
      </div>

      {/* SIGNATURE */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "50px" }}>
        <div>
          <div style={{ borderTop: "1px solid black", width: "150px" }}></div>
          <p>Instructor</p>
        </div>

        <div>
          <div style={{ borderTop: "1px solid black", width: "150px" }}></div>
          <p>Authorized Signature</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Certificate