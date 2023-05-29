export function loadLayout(
    device: string,
    Desktop: React.ComponentType,
    Mobile: React.ComponentType,
): React.ComponentType {
    switch (device) {
        case "mobile":
            return Mobile;
        default:
            return Desktop;
    }
}
