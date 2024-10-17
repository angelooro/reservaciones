import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

const fetchHotel = async (id) => {
    const res = await fetch(`http://localhost:3001/hoteles/${id}`);
    if (!res.ok) {
        throw new Error("No responde");
    }
    return res.json(); 
}

function HotelDetalles() {
    const [match, params] = useRoute("/hotel/:id");
    
    if (!match) {
        return <div>No se encontró la ruta</div>;
    }

    const {
        data: hotel,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["hotel", params.id],
        queryFn: () => fetchHotel(params.id)
    });

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error de conexión: {error.message}</div>;
    }

    return (
        <Card sx={{ maxWidth: 345, backgroundColor: "e8e8e8" }}>
            <CardMedia
                sx={{ height: 140 }}
                image={hotel.image}
                title={hotel.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {hotel.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {hotel.description}
                </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
        </Card>
    );
}

export default HotelDetalles;
