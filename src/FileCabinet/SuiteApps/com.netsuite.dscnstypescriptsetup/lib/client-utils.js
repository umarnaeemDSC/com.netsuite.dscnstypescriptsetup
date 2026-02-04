/**
 * @NApiVersion 2.1
*/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
define(["require", "exports", "N/log", "./global-utils"], function (require, exports, log, global_utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hideSpinner = exports.showSpinner = exports.injectSpinner = void 0;
    __exportStar(global_utils_1, exports);
    const injectSpinner = () => {
        const title = 'injectSpinner :: ';
        try {
            // log.debug({ title: title + 'title', details: title });
            if (document.getElementById('loadingSpinner'))
                return;
            const spinnerHTML = `
            <div id="loadingSpinner" style="
                display:none;
                position:fixed;
                top:0;
                left:0;
                width:100%;
                height:100%;
                z-index:10000;
                background:rgba(0,0,0,0.3);
                font-family:Arial, sans-serif;
                pointer-events: all;
            ">
                <div style="
                    position:absolute;
                    top:50%;
                    left:50%;
                    transform:translate(-50%,-50%);
                    text-align:center;
                ">
                    <div style="
                        border: 8px solid #f3f3f3;
                        border-top: 8px solid rgb(96, 119, 153);
                        border-radius: 50%;
                        width: 60px;
                        height: 60px;
                        margin: 0 auto;
                        animation: spin 1s linear infinite;
                    "></div>
                    <div style="
                        margin-top: 16px;
                        font-size: 18px;
                        color: #ffffff;
                        text-shadow:
                            -1px -1px 0 rgb(96, 119, 153),
                            1px -1px 0 rgb(96, 119, 153),
                            -1px 1px 0 rgb(96, 119, 153),
                            1px 1px 0 rgb(96, 119, 153);
                    ">Please wait...</div>
                </div>
            </div>
            <style>
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            </style>
        `;
            const div = document.createElement('div');
            div.innerHTML = spinnerHTML;
            document.body.appendChild(div);
        }
        catch (error) {
            log.error({ title: title + 'error', details: error });
        }
    };
    exports.injectSpinner = injectSpinner;
    const showSpinner = () => {
        const title = 'showSpinner :: ';
        try {
            // log.debug({ title: title + 'title', details: title });
            const spinner = document.getElementById('loadingSpinner');
            // log.debug(title+"spinner", spinner);
            if (spinner) {
                document.getElementById('loadingSpinner').style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        }
        catch (error) {
            log.error({ title: title + 'error', details: error });
        }
    };
    exports.showSpinner = showSpinner;
    const hideSpinner = () => {
        const title = 'hideSpinner :: ';
        try {
            // log.debug({ title: title + 'title', details: title });
            const spinner = document.getElementById('loadingSpinner');
            if (spinner) {
                spinner.style.display = 'none';
                document.body.style.overflow = '';
            }
        }
        catch (error) {
            log.error({ title: title + 'error', details: error });
        }
    };
    exports.hideSpinner = hideSpinner;
});
