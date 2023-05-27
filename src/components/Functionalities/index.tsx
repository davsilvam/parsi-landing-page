import {
  ArrowsUpDownIcon,
  BanknotesIcon,
  TagIcon,
} from '@heroicons/react/24/outline'
import transaction from '../../assets/transaction.gif'
import category from '../../assets/category.gif'
import budget from '../../assets/budget.gif'

import { Container, Functionality } from './styles'

export function Functionalities() {
  return (
    <Container>
      <div>
        <h2>
          Conheça nossas <br /> <span>Funcionalidades</span>
        </h2>
      </div>

      <Functionality>
        <img
          src={transaction}
          alt="Transaction system gif example."
        />
        <div>
          <div>
            <ArrowsUpDownIcon width={24} />
          </div>

          <h3>Registro de transações</h3>

          <p>
            A aplicação gira em torno das transações cadastradas pelo usuário.
            Registre suas transações escolhendo entre dois tipos: ganhos e
            despesas. Além isso, as transações são segmentadas em categorias
            dinâmicas ao seu tipo. As possibilidades são muitas!
          </p>
        </div>
      </Functionality>

      <Functionality>
        <div>
          <div>
            <TagIcon width={24} />
          </div>

          <h3>Categorias personalizadas</h3>

          <p>
            A Parsi disponibiliza categorias padrões de ganhos e despesas para
            cada usuário cadastrado, mas também permite que você crie suas
            próprias categorias, aumentando a personalização das suas transações
            e servindo crucialmente para os orçamentos de despesas.
          </p>
        </div>

        <img
          src={category}
          alt="Transaction system gif example."
        />
      </Functionality>

      <Functionality>
        <img
          src={budget}
          alt="Transaction system gif example."
        />

        <div>
          <div>
            <BanknotesIcon width={24} />
          </div>

          <h3>Orçamentos mensais</h3>

          <p>
            Crie orçamentos mensais e defina o máximo que deseja gastar em
            alguma despesa. Os orçamentos funcionam calculando quanto já foi
            gasto no mês atual e comparando com o limite que você define,
            retornando a situação do orçamento.
          </p>
        </div>
      </Functionality>
    </Container>
  )
}
