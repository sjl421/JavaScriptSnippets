const image = 'data:image/png;base64,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';

const vinCode = null;
const date = null;

const toCarrierName = null;
const toCarrierAddress = null;

const trafficStatementDateRange = null;

const serviceType = null;
const totalAmountDue = null;

const service = null;

const docDefinition = 
{ 
    content: [
        {
            alignment: 'justify',
            columns: [
                {
                    stack: [
                        {
                            image: image,
                            width: 100,
                            height: 50
                        },
                        {
                            stack: [
                            'VIN: 015-072018-4w',
                            'Date: July 30, 2018'
                            ],
                            style: 'vin'
                        },
                        {
                            stack: [
                            'To:',
                            'c/o Billing Department',
                            {text: 'Vinculum Communications, Inc.', style: 'toCarrierName'},
                            '5935 Cornerstone Ct West,',
                            'Suite 160, San Diego, CA 92121 USA'
                            ],
                            style: 'toCarrier'
                        }
                    ]
                },
                {
                    stack: [
                        'Obie Tel LLC',
                        '415 Madison Avenue, 13th Floor',
                        'New York, NY 10017 USA',
                        'Tel: +1 (646)'
                    ],
                    style: 'header'
                }
            ]
        },
        {text: "Enclosed is ObieTel's Traffic Statement for period covering July 22-29, 2018", style: 'trafficText'},
        {
            style: 'overviewBillTable',
            table: {
                body: [
                    [{text: 'Service', style: 'tableHeader'}, {text: 'Period', style: 'tableHeader'}, {text: 'Amount Due', style: 'tableHeader'}],
                    ['Voice Traffic Standard', 'July 22 - 29, 2018', 'US$ 34,980.00']
                ]
            }
        },
        {text: 'Please remit payment to Obie Tel LLC via wire transfer to:', style: 'wire'},
        {
            stack: [
                'TD Bank',
                '444 Madison Avenue, New York, NY 10022 USA',
                'Contact Number: +1 (212) 308-7046',
                'Account Name: Obie Tel LLC',
                'Account Number: 42714117317',
                'Routing Number: 026013673',
                'Swift Code: NRTHUS33'
            ],
            style: 'wireInfo'
        },
        {
            text: 'Traffic Statement', style: 'trafficStatementHeader'
        },
        {
            text: 'For period: July 22-29, 2018'
        },
        {
            stack: [
                'Company: Vinculum Communications, Inc.',
                'Service: Voice'
            ],
            style: 'marginTop20'
        },
        {
            table: {
                body: [
                    [
                        {text: 'Code', style: 'tableHeader'}, 
                        {text: 'Destination', style: 'tableHeader'}, 
                        {text: 'Call Count', style: 'tableHeader'},
                        {text: 'Volume (mins', style: 'tableHeader'},
                        {text: 'Unit Cost (per minute)', style: 'tableHeader'},
                        {text: 'Amount', style: 'tableHeader'}
                    ],
                    [
                        '1', 'USA', '3000', '500,000', 'US$ 0.0041', 'US$ 2050.00'
                    ]
                ]
            }
        }
    ], // end of content obj
    styles: {
        header: {
            alignment: 'right'
        },
        vin: {
            margin: [0, 20, 0, 0]
        },
        toCarrier: {
            margin: [0, 20, 0, 0]
        },
        toCarrierName: {
            bold: true
        },
        trafficText: {
            margin: [0, 20, 0, 0],
            bold: true
        },
        overviewBillTable: {
            margin: [0, 10, 0, 0]
        },
        tableHeader: {
            bold: true
        },
        wire: {
            margin: [0, 20, 0, 10],
            bold: true
        },
        wireInfo: {
            margin: [0, 0, 0, 340]
        },
        trafficStatementHeader: {
            fontSize: 16,
            bold: true
        },
        marginTop20: {
            margin: [0, 20, 0, 0]
        },
    }
};

function printPDF() {
    // pdfMake.createPdf(docDefinition).download('optionalName.pdf');
    const pdfDocGenerator = pdfMake.createPdf(docDefinition);
    pdfDocGenerator.getDataUrl((dataUrl) => {
        const targetElement = document.querySelector('#iframeContainer');
        const iframe = document.createElement('iframe');
        iframe.src = dataUrl;
        iframe.setAttribute('class', 'iFrame');
        targetElement.appendChild(iframe);
    });
}

