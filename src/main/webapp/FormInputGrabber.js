class FormInputGrabber {
    constructor() {
        this.values = {};
        this.defaultValues = {};
    }

    update(key, val) {
        this.values[key] = val;
    }

    checkComponentUpdater(fieldName, defaultValue) {
        this.defaultValues[fieldName] = defaultValue;
        return (e) => {
            this.update(fieldName, e.target.checked);
            return true;
        }
    }

    textComponentUpdater(fieldName, defaultValue) {
        this.defaultValues[fieldName] = defaultValue;
        return (e) => {
            this.update(fieldName, e.target.value);
            return true;
        };
    }

    quantumComponentUpdater(fieldName, defaultValue) {
        this.defaultValues[fieldName] = defaultValue;
        return (val) => {
            this.update(fieldName, val);
            return true;
        };
    }

    get(key) {
        if (this.values[key] != null) {
            return this.values[key];
        } else {
            return this.defaultValues[key];
        }
    }
}

class UrlRequestBuilder {
    constructor() {
        this.pairs = [];
    }

    add(key, val) {
        this.pairs.push([key, val]);
        return this;
    }

    addInt(key, intVal) {
        return this.add(key, intVal.toString());
    }

    addBoolean(key, boolVal) {
        return this.add(key, boolVal ? '1' : 0);
    }

    build() {
        var pairStrings = this.pairs.map(p => {
            return `${p[0]}=${encodeURIComponent(p[1])}`;
        });
        return pairStrings.join('&');
    }
}