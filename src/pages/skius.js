import React from 'react'
import SkuCard from '../components/Products/SkuCard'
import Grid from '@material-ui/core/Grid';
const conatinerStyles = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '1rem 0 1rem 0',
  }
  const styGrid = {
    flexWrap: 'wrap',
    padding: '1rem',
  }
const stripe_url = 'https://api.stripe.com'

const Skius = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: false,
            fetchedData: [],
        }
      }
    
    componentDidMount() {

        this.getProducts();
    }

    getProducts() {
        console.log(process.env.STRIPE_S_KEY);
        fetch(stripe_url + "/v1/skus", {
            method: "GET",
            headers: { 
                'Host':'api.stripe.com',
                'Accept':'*/*',
                'Cache-Control':'no-cache',
                'Connection': 'keep-alive',
                'Authorization': `Bearer ${process.env.STRIPE_S_KEY}`
            }
        }).then(response => {
            return response.json()
        }).then(json => {
            console.log(json)
            this.setState({
                fetchedData: json.data
            })

        });
    }

    render() {
        const props = this.props;
        const { fetchedData, loading } = this.state
        return ( <div>
            <Grid style={conatinerStyles}>
             {fetchedData.map(sku => <Grid  key={sku.id}  item xs={6} sm={4} style={styGrid}>
            <SkuCard {...props}sku={sku} />
          </Grid>)}   
            
         
          
        </Grid>
            
            </div>

        )
    }
}

export default Skius