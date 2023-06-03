export function loadLayout(
    device: string,
    Desktop: React.ComponentType,
    Mobile: React.ComponentType,
): React.ComponentType {
    switch (device) {
        case "tablet":
        case "mobile":
            return Mobile;
        default:
            return Desktop;
    }
}
