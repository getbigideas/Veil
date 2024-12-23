import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Faqs } from "./pages/Faqs"
import { Token } from "./pages/Token"
import { RevenueShare } from "./pages/revenue-share"
import { Layout } from "./pages/layout"
import { Tos } from "./pages/Tos"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/token" element={<Token />} />
            <Route path="/revenue-share" element={<RevenueShare />}></Route>
            <Route path="/tos" element={<Tos />}></Route>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
