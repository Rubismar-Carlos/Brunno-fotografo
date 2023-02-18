
import { Link } from 'react-router-dom'

import Slogam from '../../components/Slogam/Slogam'

const Home = () => {

  return (
    <div>
        <div id='container-servico'>
            <Link to='/servicos'>
                <div className="container-servicos">
                  < Slogam />
                </div>
            </Link>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Home