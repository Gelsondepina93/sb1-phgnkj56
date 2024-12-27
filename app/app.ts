import { Application } from '@nativescript/core';
import { Geolocation } from '@nativescript/geolocation';

// Request location permissions on app start
Geolocation.enableLocationRequest().catch(err => {
    console.error('Error requesting location permissions:', err);
});

Application.run({ moduleName: 'app-root' });