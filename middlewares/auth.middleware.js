export const authBearer = (req, res, next) => {
    const authHeader = req.headers.authorization;

    //tidak ada authorization
    if (!authHeader) {
        return res.status(401).json({ message: 'No authorization header' });
    }

    //harus bearer
    if (!authHeader.startsWith("Bearer")) {
        return res.status(401).json({ message: 'Bearer token required' });
    }

    //ambil token
    const token = authHeader.split(" ")[1];

    //token yang benar (misal hardcode)
    const VALID_TOKEN = "12345TOKENRAHASIA";

    if (token !==VALID_TOKEN) {
        return res.status(403).json({ message: 'Invalid token' });
    }

    next();
}
