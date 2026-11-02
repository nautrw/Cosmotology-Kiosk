module.exports = {
    apps: [
        {
            name: "Cosmetology-Kiosk",
            script: "../.venv/bin/gunicorn",
            args: "cosmokiosk.wsgi:application --workers 17 --bind 0.0.0.0:8080",
            interpreters: "none",
            env: {
                PYTHONUNBUFFERED: "1"
            }
        }
    ]
}