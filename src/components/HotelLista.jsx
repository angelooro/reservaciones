import { Card, CardActions, CardContent, CardMedia, Link, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

const fetchHotels = async () => {
    const res = await fetch("http://localhost:3001/hoteles");
    if (!res.ok) {
        throw new Error("Conexión no responde");
    }
    return res.json();
}

function HotelLista() {
    const {
        data: hoteles,
        isLoading,
        error,
    } = useQuery({ queryKey: ["hoteles"], queryFn: fetchHotels });

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error fetching Hoteles! {error.message}</div>;
    }

    return (
        <>
            <Typography variant="h4" component="h2">
                Reserva Web
            </Typography>
            <Stack spacing={2}>
                {hoteles.map(hotel => (
                    <Card key={hotel.id} sx={{ maxWidth: 345, backgroundColor: "e8e8e8" }}>
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
                            <Link href={`/hotel/${hotel.id}`} style={{ textDecoration: 'none' }}>
                                <button size="small">Mirar Detalle</button>
                            </Link>
                        </CardActions>
                    </Card>
                ))}
            </Stack>
        </>
    );
}

export default HotelLista;
