export default ({ children }) => {
  return (
    <div>

      {children}
      {/* language=CSS */}
      <style jsx="">{`
        div {
          margin-bottom: 20px;
          color: rgb(119, 119, 119);
        }
      `}
      </style>
    </div>
  )
}