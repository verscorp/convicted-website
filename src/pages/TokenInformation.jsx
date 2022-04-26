import React, { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactApexChart from 'react-apexcharts'
import Header from '../components/Header'
import headerBackground from '../static/img/headerBackground.jpg'
import { useLoad } from '../requests/hooks'
import Content from '../components/Content'

export default function TokenInformation() {
    const { pathname } = useLocation()
    const path = pathname.substring(1)

    const { REACT_APP_COMPANY_NAME, REACT_APP_REP_NAME } = process.env

    const md = useLoad({ url: `${REACT_APP_COMPANY_NAME}/${REACT_APP_REP_NAME}/main/${path}.md` })

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })
    const table1 = JSON.parse(sessionStorage.getItem('table1') || '[]')
    const table2 = JSON.parse(sessionStorage.getItem('table2') || '[]')
    const values1 = []
    const values2 = []
    table1.map((item) => {
        const str = item[1].replace(/\s+/g, '')
        const test = str.indexOf(',')
        const test1 = str.substring(0, test)
        values1.push(Math.floor(test1))
        return null
    })
    table2.map((item) => {
        const str = item[1].replace(/\s+/g, '')
        const test = str.indexOf(',')
        const test1 = str.substring(0, test)
        values2.push(Math.floor(test1))
        return null
    })

    const pieSeries = values1
    const pieOptions = {
        chart: {
            type: 'donut',
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200,
                },
                legend: {
                    position: 'bottom',
                },
            },
        }],
    }
    const columnsOptions = {
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: true,
            },
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0,
                },
            },
        }],
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 10,
            },
        },
        xaxis: {
            type: 'datetime',
            categories: ['01/01/2022 GMT', '02/01/2022 GMT', '03/01/2022 GMT', '04/01/2022 GMT', '05/01/2022 GMT', '06/01/2022 GMT'],
        },
        legend: {
            position: 'right',
            offsetY: 40,
        },
        fill: {
            opacity: 1,
        },
    }
    const columnsSeries = [{
        name: 'PRODUCT A',
        data: values2,
    }, {
        name: 'PRODUCT B',
        data: values2,
    }, {
        name: 'PRODUCT C',
        data: values2,
    }, {
        name: 'PRODUCT D',
        data: values2,
    }]
    return (
        <div>
            <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
                <Header back={headerBackground} />
            </div>
            <Content md={md} />
            {/*<ReactApexChart options={pieOptions} width={600} series={pieSeries} type="donut" />*/}
            {/*<ReactApexChart options={columnsOptions} series={columnsSeries} type="bar" height={350} width={1000} />*/}
        </div>
    )
}
