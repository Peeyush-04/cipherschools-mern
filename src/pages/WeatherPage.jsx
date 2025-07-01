export default function WeatherPage() {
    return (
        <div className="weather-page">
            <h1 className="heading">Weather Page</h1>
            
            <button class="btn btn-soft btn-success">
                <label className="swap">
                <input type="checkbox" />
                <div className="swap-on">Fahrenheit</div>
                <div className="swap-off">Celcius</div>
                </label>
            </button>
        </div>
    );
}