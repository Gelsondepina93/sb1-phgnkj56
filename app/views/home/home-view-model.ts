import { Observable, PropertyChangeData } from '@nativescript/core';
import { Geolocation } from '@nativescript/geolocation';

export class HomeViewModel extends Observable {
    private _userLocation: { latitude: number; longitude: number };
    private _estimatedTime: string = "~10 min";
    private _estimatedPrice: string = "~500 CVE";
    
    constructor() {
        super();
        this._userLocation = {
            latitude: 14.9177,  // Praia, Cape Verde default coordinates
            longitude: -23.5092
        };
        this.getCurrentLocation();
    }

    get userLocation() {
        return this._userLocation;
    }

    get estimatedTime() {
        return this._estimatedTime;
    }

    get estimatedPrice() {
        return this._estimatedPrice;
    }

    async getCurrentLocation() {
        try {
            const location = await Geolocation.getCurrentLocation({
                desiredAccuracy: 3,
                maximumAge: 5000,
                timeout: 10000
            });
            
            this._userLocation = {
                latitude: location.latitude,
                longitude: location.longitude
            };
            
            this.notifyPropertyChange('userLocation', this._userLocation);
        } catch (error) {
            console.error('Error getting location:', error);
        }
    }

    requestTaxi() {
        // TODO: Implement taxi request logic
        console.log('Requesting taxi...');
    }
}