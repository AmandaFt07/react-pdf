import Link from 'next/link'
import HeaderStyle from '../../../styles/header'

export default function Header() {
    return(
        <HeaderStyle>
          <nav>
            <ul>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/Components/Relatorio1'>Relatório Beach</Link>
              </li>
              <li>
                <Link href='/Components/Relatorio2'>Relatório NF</Link>
              </li>
            </ul>
          </nav>
        </HeaderStyle>
    )
}