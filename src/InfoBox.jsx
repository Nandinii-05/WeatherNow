import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}) {
    const INIT_URL = 
        "https://plus.unsplash.com/premium_photo-1729600377083-bbe558d8b7a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww"
  
  return (
    <div className="InfoBox">
      <div className='cardContainer'>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={INIT_URL}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} component={"span"}>
            <div>Temperature = {info.temp}&deg;C</div>
            <div>Humidity = {info.humidity}</div>
            <p>Min temp = {info.tempMin}&deg;C</p>
            <p>Max temp = {info.tempMax}&deg;C</p>
            <p>The Weather can be described as <i>{info.weather}</i> and feels like = {info.feels_like}&deg;C</p>
          </Typography>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}
