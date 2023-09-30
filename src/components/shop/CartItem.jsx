import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useData } from "../../context/DataContext";
import { Button, Stack } from "react-bootstrap";

export function CartItem({ id, quantity }) {
  const data = useData();

  const { removeFromCart } = useShoppingCart();

  const item = data.find((i) => i._id === id);
  if (item === null) return null;

  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="d-flex align-items-center "
    >
      <img
        className="p-2"
        src={item.image}
        style={{ width: "125px", height: "100px", objectFit: "contain" }}
      />
      <div className="p-2 mx-5">
        <div>
          {item.name}{" "}
          {quantity > 0 && (
            <span style={{ fontSize: ".9rem", color: "red" }}>x{quantity}</span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".9rem" }}>
          ${Math.round(item.price * quantity * 100) / 100}
        </div>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removeFromCart(item._id)}
        >
          &times;
        </Button>
      </div>
    </Stack>
  );
}
