import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {last7DaysVaccination} = props

  const DataFormatter = number => `${number.toString()}`

  return (
    <div className="first-container">
      <h1 className="para">Vaccination Coverage</h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={1000}
          height={300}
          data={last7DaysVaccination}
          margin={{
            top: 5,
          }}
        >
          <XAxis
            dataKey="vaccine_date"
            tick={{
              stroke: ' #6c757d',
              strokeWidth: 0,
            }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{
              stroke: ' #6c757d',
              strokeWidth: 0,
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 10,
            }}
          />
          <Bar
            dataKey="dose_1"
            name="Dose 1"
            fill=" #5a8dee"
            barSize="10%"
            className="dose"
          />
          <Bar dataKey="dose_2" name="Dose 2" fill=" #f54394" barSize="10%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
