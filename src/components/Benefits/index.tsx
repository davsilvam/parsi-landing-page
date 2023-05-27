import {
  ChartPieIcon,
  CalendarIcon,
  SwatchIcon,
} from '@heroicons/react/24/outline'
import { Container } from './styles'

export function Benefits() {
  return (
    <Container>
      <h2>
        Empenhada em ajudar <span>você</span> a poupar
      </h2>

      <p>
        A Parsi não mede esforços ao tentar informar seus usuários da sua atual
        situação. <br /> Para isso, a aplicação dispõe de vários formas de
        alertar o usuários, são elas:
      </p>

      <ul>
        <li>
          <div>
            <div>
              <ChartPieIcon width={24} />
            </div>

            <strong>Cores vibrantes</strong>
            <p>
              A aplicação conta com cores específicas e muito chamativas para os
              seus dois tipos de transação (ganhos e despesas). Essa temática se
              estende por toda a aplicação e ajuda o usuário a compreender a
              natureza dos valores apresentados.
            </p>
          </div>
        </li>
        <li>
          <div>
            <div>
              <SwatchIcon width={24} />
            </div>

            <strong>Gráficos estatísticos</strong>
            <p>
              O Dashboard e a seção Transações apresentam gráficos que são
              atualizados em tempo real conforme se registram as transações.
              Eles possuem dados de balanço percentual e mostram o quão
              equilibrada está sua carteira.
            </p>
          </div>
        </li>
        <li>
          <div>
            <div>
              <CalendarIcon width={24} />
            </div>

            <strong>Orçamentos mensais</strong>
            <p>
              Os orçamentos vieram para aqueles que precisam de um pequeno
              empurrão para limitar seus gastos. Crie um orçamento e defina um
              valor máximo a ser gasto em alguma categoria durante aquele mês e
              monitore o seu avanço.
            </p>
          </div>
        </li>
      </ul>
    </Container>
  )
}
