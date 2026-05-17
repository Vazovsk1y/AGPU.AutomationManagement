const apiBaseUrlEnvVariableValue = "API_BASE_URL"; // DO NOT CHANGE IT USED INSIDE entrypoint.sh script.
const apiBaseUrl = apiBaseUrlEnvVariableValue !== "API_BASE_URL" ? apiBaseUrlEnvVariableValue : "http://10.0.1.208:5555/api";

const accessTokenKey = "accessToken";
const refreshTokenKey = "refreshToken";

const administratorRole = "Администратор";
const deputyAdministratorRole = "Заместитель администратора";
const engineerRole = "Инженер";
const userRole = "Пользователь";

const statusesMap = {
    "Solved": { color: "green", ru: "Выполнено", iconName: "check-circle" },
    "InProgress": { color: "orange", ru: "В процессе выполнения", iconName: "clock" },
    "Pending": { color: "red", ru: "В процессе рассмотрения", iconName: "pending" },
};

const problemTypesMap = {
    "InternetIssue": { ru: "Проблемы с интернетом", iconName: "globe" },
    "HardwareIssue": { ru: "Проблемы с железом", iconName: "monitor" },
    "SoftwareBug": { ru: "Проблемы с ПО", iconName: "bug" },
    "Other": { ru: "Другое", iconName: "help-circle" },
};

const userProfileFieldsMap = {
    id: "Идентификатор",
    username: "Имя пользователя",
    fullName: "ФИО",
    post: "Должность",
    email: "Электронная почта",
    emailConfirmed: "Почта подтверждена",
    phoneNumber: "Номер телефона",
    phoneNumberConfirmed: "Телефон подтверждён"
};

const iconSvgMap = {
    "check-circle": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M8.3 12.2 10.8 14.7 15.9 9.6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    "clock": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M12 7.4v5.2l3.6 2.1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    "pending": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3.8h6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M10.2 3.8h3.6v2.5l3.7 3.7a6.4 6.4 0 1 1-11 4.5 6.3 6.3 0 0 1 1.9-4.5l3.8-3.7V3.8Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M12 11v3.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    "globe": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M3.7 12h16.6M12 3.2c2.3 2.3 3.6 5.4 3.6 8.8 0 3.4-1.3 6.5-3.6 8.8-2.3-2.3-3.6-5.4-3.6-8.8 0-3.4 1.3-6.5 3.6-8.8Z" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    "monitor": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="5" width="16" height="11" rx="1.8" stroke="currentColor" stroke-width="1.8"/><path d="M9 19h6M12 16v3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    "bug": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.2a3 3 0 1 1 6 0M8.2 10.4h7.6v4.6a3.8 3.8 0 0 1-7.6 0v-4.6Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.8 10.8h2.1m8.2 0h2.1M6.5 15h2.2m6.6 0h2.2M8.6 7.4 7 5.9m8.4 1.5L17 5.9M12 6V3.8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
    "help-circle": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M9.6 9.3a2.6 2.6 0 0 1 4.8 1.4c0 1.8-2.4 2.2-2.4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="12" cy="17.4" r="1" fill="currentColor"/></svg>`,
    "calendar": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="6" width="16" height="14" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M8 4v4M16 4v4M4 10h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    "user": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="3.2" stroke="currentColor" stroke-width="1.8"/><path d="M5.5 18.5a6.5 6.5 0 0 1 13 0" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    "building": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 20V7.5L12 4l7 3.5V20" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 20v-4h6v4M9 9h.01M12 9h.01M15 9h.01M9 12h.01M12 12h.01M15 12h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    "pin": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 20c3.3-4.1 5-7 5-9.5a5 5 0 1 0-10 0c0 2.5 1.7 5.4 5 9.5Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="10.5" r="1.8" stroke="currentColor" stroke-width="1.6"/></svg>`,
    "factory": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 20V9.5l5 3V9.5l5 3V6l6 3.5V20H4Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M8 20v-4m4 4v-4m4 4v-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
    "settings": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 8.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Z" stroke="currentColor" stroke-width="1.8"/><path d="M19 12a7.4 7.4 0 0 0-.1-1.1l2-1.5-2-3.4-2.4.9a7.9 7.9 0 0 0-1.9-1.1L14.2 3h-4.4l-.4 2.8c-.7.3-1.3.6-1.9 1.1L5 6l-2 3.4 2 1.5A7.4 7.4 0 0 0 5 12c0 .4 0 .8.1 1.1l-2 1.5 2 3.4 2.4-.9c.6.5 1.2.8 1.9 1.1l.4 2.8h4.4l.4-2.8c.7-.3 1.3-.6 1.9-1.1l2.4.9 2-3.4-2-1.5c.1-.3.1-.7.1-1.1Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>`,
    "sparkles": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.5 13.6 9l4.4 1.6-4.4 1.6L12 16.7l-1.6-4.5L6 10.6 10.4 9 12 4.5ZM18.3 4.2l.7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7.7-1.9ZM18.3 14.8l.7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7.7-1.9Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>`,
    "team": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="2.6" stroke="currentColor" stroke-width="1.8"/><circle cx="16.5" cy="10" r="2.2" stroke="currentColor" stroke-width="1.6"/><path d="M4.8 18a4.3 4.3 0 0 1 8.4 0M13.6 17.8a3.6 3.6 0 0 1 6.1-2.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
    "code": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 7 4 12l5 5M15 7l5 5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    "smartphone": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="3.5" width="10" height="17" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M10.8 17.5h2.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    "tools": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 6.5a3.5 3.5 0 0 0 4.8 4.8l-6.9 6.9a1.8 1.8 0 0 1-2.5 0l-.1-.1a1.8 1.8 0 0 1 0-2.5l7-7.1a3.5 3.5 0 0 0-2.3-2Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="m5.2 9.1 2.7 2.7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    "palette": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4a8 8 0 1 0 0 16h1.2a2.3 2.3 0 0 0 0-4.6h-.6a1.7 1.7 0 0 1-1.7-1.7c0-.9.7-1.7 1.7-1.7H14A6 6 0 0 0 20 6.3 8.1 8.1 0 0 0 12 4Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="7.5" cy="11" r="1" fill="currentColor"/><circle cx="10.5" cy="8" r="1" fill="currentColor"/><circle cx="14.5" cy="8.5" r="1" fill="currentColor"/></svg>`,
    "clipboard": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="5" width="12" height="15" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M9 5.5h6V4.8A1.8 1.8 0 0 0 13.2 3h-2.4A1.8 1.8 0 0 0 9 4.8v.7Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`,
    "link": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 14 7.8 16.2a3.2 3.2 0 0 1-4.5-4.5L5.5 9.5A3.2 3.2 0 0 1 10 14ZM14 10l2.2-2.2a3.2 3.2 0 1 1 4.5 4.5l-2.2 2.2A3.2 3.2 0 0 1 14 10ZM8.8 15.2l6.4-6.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    "star": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 3.8 2.6 5.2 5.7.8-4.1 4 1 5.7L12 16.8 6.8 19.5l1-5.7-4.1-4 5.7-.8L12 3.8Z" fill="currentColor" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>`
};

function getIconSvg(iconName, label = "") {
    const svg = iconSvgMap[iconName] || "";
    const a11yAttrs = label
        ? `role="img" aria-label="${escapeHtmlAttribute(label)}"`
        : 'aria-hidden="true"';

    return `<span class="ui-icon" ${a11yAttrs}>${svg}</span>`;
}

function getIconLabel(iconName, text, extraClass = "") {
    const safeClass = extraClass ? ` ${extraClass}` : "";
    return `<span class="icon-label${safeClass}">${getIconSvg(iconName, text)}<span>${text}</span></span>`;
}

function getStarIconButton(value) {
    return `<button type="button" class="star-button" data-value="${value}" aria-label="Оценка ${value} из 5">${getIconSvg("star", `Оценка ${value} из 5`)}</button>`;
}

function getStarRatingHtml(value) {
    const parsedValue = Number(value) || 0;
    const stars = Array.from({ length: 5 }, (_, index) => {
        const checkedClass = index < parsedValue ? " star-checked" : "";
        return `<span class="star-icon${checkedClass}" aria-hidden="true">${getIconSvg("star")}</span>`;
    }).join("");

    return `
        <div class="rating-container">
            <div class="stars stars-readonly">${stars}</div>
            <span>${parsedValue}</span>
        </div>
    `;
}

function escapeHtmlAttribute(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll('"', "&quot;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");
}

document.addEventListener("DOMContentLoaded", async () => {
    await refreshTokensIfRequired();
    appendFooterText();
    document.getElementById("logout-button")?.addEventListener("click", onLogoutButtonClicked);
    document.getElementById("email")?.addEventListener("click", () => onEmailClicked('profile-modal'));
});

async function onEmailClicked(modalId) {
    try {
        const accessToken = getAccessToken();
        const response = await fetch(`${apiBaseUrl}/users/me`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            }
        });

        if (response.ok) {
            const currentUser = await response.json();

            const profileContainer = document.getElementById("profile-container");
            profileContainer.innerHTML = "";

            for (const prop in currentUser) {
                const p = document.createElement("p");

                const label = userProfileFieldsMap[prop] || prop;
                let value = currentUser[prop];

                if (value === null || value === undefined || value === "") {
                    value = "Не указано";
                } else if (typeof value === "boolean") {
                    value = value ? "Да" : "Нет";
                }

                p.innerHTML = `<strong>${label}:</strong> ${value}`;
                profileContainer.appendChild(p);
            }

        } else {
            window.location = `sign-in.html`;
        }
    } catch (error) {
        console.error(error);
    }

    onOpenModalWindowButtonClicked(modalId);
}

function joinErrors(errors) {
    return Object.values(errors)
        .flat()
        .join('\n');
}

function formatDateTime(dateTime) {
    if (!dateTime) {
        return "";
    }

    return new Intl.DateTimeFormat('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }).format(new Date(dateTime));
}

function onPageSizeChanged(location, getExtraParamsString = () => "") {
    const selectedPageSize = document.getElementById("page-sizes-select").value;
    let url = `${location}?pageIndex=1&pageSize=${selectedPageSize}`;

    if (getExtraParamsString) {
        url += getExtraParamsString();
    }

    window.location = url;
    console.log(`${onPageSizeChanged.name} func\n Url: ${url}\nDelegate result: ${getExtraParamsString()}\n${getExtraParamsString()}`);
}

function updatePageSizesSelect(urlParams) {
    let pageSize = urlParams.get("pageSize");
    const pageIndex = urlParams.get("pageIndex") || 1;

    const pageSizesSelect = document.getElementById("page-sizes-select");
    const pageSizeExists = Array.from(pageSizesSelect.options).some(option => option.value === pageSize);

    pageSizesSelect.value = pageSizeExists ? pageSize : pageSizesSelect.options[0].value;
    pageSize = pageSizeExists ? pageSize : pageSizesSelect.options[0].value;

    return { pageIndex, pageSize };
}

function appendFooterText() {
    const pTag = document.querySelector("footer")?.querySelector("p");
    if (pTag) {
        pTag.textContent = `© 2024 - ${new Date().getFullYear()} Азовский Государственный Педагогический Университет. Все права защищены.`;
    }
}

async function refreshTokensIfRequired() {
    const accessToken = getAccessToken();
    if (accessToken) {
        const decodedToken = decodeJwtTokenPayload(accessToken);
        if (decodedToken && !isTokenAboutToExpire(decodedToken.exp)) {
            return;
        }
    }

    const refreshToken = getRefreshToken();
    try {

        const response = await fetch(`${apiBaseUrl}/auth/refresh`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ refreshToken })
        });

        if (response.ok) {
            const responseData = await response.json();

            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");

            // TODO: Choose another option to store tokens.

            localStorage.setItem(refreshTokenKey, responseData.refreshToken);
            localStorage.setItem(accessTokenKey, responseData.accessToken);

            console.log("Tokens updated.");
        }
        else {
            console.log(await response.text());
        }
    }
    catch (error) {
        console.error(error);
    }
}

function isTokenAboutToExpire(tokenExpirationDatetime) {
    const currentUnixEpoch = Math.floor(Date.now() / 1000);
    const timeDifference = tokenExpirationDatetime - currentUnixEpoch;

    return timeDifference <= 120; // 2 минуты
}

function getAccessToken(){
    return localStorage.getItem(accessTokenKey);
}

function getRefreshToken(){
    return localStorage.getItem(refreshTokenKey);
}

function decodeJwtTokenPayload(token){
    if (typeof token !== "string") {
        return null;
    }

    try {
        return JSON.parse(base64_url_decode(token.split(".")[1]));
    } catch (e) {
        console.error(e);
        return null;
    }
}

function b64DecodeUnicode(str) {
    return decodeURIComponent(
        atob(str).replace(/(.)/g, function(m, p) {
            let code = p.charCodeAt(0).toString(16).toUpperCase();
            if (code.length < 2) {
                code = "0" + code;
            }
            return "%" + code;
        })
    );
}

function base64_url_decode(str) {
    let output = str.replace(/-/g, "+").replace(/_/g, "/");
    switch (output.length % 4) {
        case 0:
            break;
        case 2:
            output += "==";
            break;
        case 3:
            output += "=";
            break;
        default:
            throw "Illegal base64url string!";
    }

    try {
        return b64DecodeUnicode(output);
    } catch (err) {
        return atob(output);
    }
}

function onLogoutButtonClicked() {
    localStorage.removeItem(accessTokenKey);
    localStorage.removeItem(refreshTokenKey);
    window.location = "index.html";
}

async function isAuthenticated(callbackUrl = null){
    try {
        const accessToken = getAccessToken();
        const response = await fetch(`${apiBaseUrl}/users/me`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            }
        });

        if (response.ok) {
            const currentUser = await response.json();
            hideIfNotAdministratorOrDeputyAdministrator(accessToken, "users-navigation-item");

            document.getElementById("navigation-panel").style.visibility = "visible";
            showEmail(currentUser.email);
        } else {
            window.location = `sign-in.html?callbackUrl=${callbackUrl}`;
        }
    }
    catch (error) {
        console.error(error);
    }
}

function hideIfNotAdministratorOrDeputyAdministrator(accessToken, elementId) {
    const decodedToken = decodeJwtTokenPayload(accessToken);
    const rolesArray = Array.isArray(decodedToken.roles) ? decodedToken.roles : [decodedToken.roles];

    if (!rolesArray.includes(administratorRole) && !rolesArray.includes(deputyAdministratorRole)) {
        document.getElementById(elementId).style.display = "none";
    }

}

function showEmail(email) {
    const emailElement = document.getElementById("email");
    emailElement.textContent = email;

    document.getElementById("user-info").style.display = "flex";
}

function updatePager(pageIndex, totalPages, hasNextPage, hasPreviousPage, location, getExtraParamsString = () => "") {
    const rangeSize = 5; // 2 страницы до, 2 страницы после, и текущая страница
    const halfRange = Math.floor(rangeSize / 2);

    let startPage = Math.max(1, pageIndex - halfRange);
    let endPage = Math.min(totalPages, pageIndex + halfRange);

    if (pageIndex - startPage < halfRange) {
        endPage = Math.min(totalPages, endPage + (halfRange - (pageIndex - startPage)));
    }

    if (endPage - pageIndex < halfRange) {
        startPage = Math.max(1, startPage - (halfRange - (endPage - pageIndex)));
    }

    const pageNumbersContainer = document.querySelector(".page-numbers");
    pageNumbersContainer.innerHTML = "";

    for (let i = startPage; i <= endPage; i++) {
        const pageButton = document.createElement("button");
        pageButton.textContent = i;

        if (i === pageIndex) {
            pageButton.classList.add("active");
        }

        pageButton.addEventListener("click", () => {
            const selectedPageSize = document.getElementById("page-sizes-select").value;

            let url = `${location}?pageIndex=${i}&pageSize=${selectedPageSize}`;

            if (getExtraParamsString) {
                url += getExtraParamsString();
            }

            window.location = url;
        });

        pageNumbersContainer.appendChild(pageButton);
    }

    const previousButton = document.getElementById("previous-page");
    const nextButton = document.getElementById("next-page");

    previousButton.disabled = !hasPreviousPage;
    nextButton.disabled = !hasNextPage;

    previousButton.onclick = () => {
        const selectedPageSize = document.getElementById("page-sizes-select").value;
        let url = `${location}?pageIndex=${pageIndex - 1}&pageSize=${selectedPageSize}`;

        if (getExtraParamsString) {
            url += getExtraParamsString();
        }

        window.location = url;
    };

    nextButton.onclick = () => {
        const selectedPageSize = document.getElementById("page-sizes-select").value;
        let url = `${location}?pageIndex=${pageIndex + 1}&pageSize=${selectedPageSize}`;

        if (getExtraParamsString) {
            url += getExtraParamsString();
        }

        window.location = url;
    };
}

function onOpenModalWindowButtonClicked(modalWindowId) {
    document.getElementById(modalWindowId).style.display = "flex";
}

function onCloseModalWindowButtonClicked(modalWindowId) {
    document.getElementById(modalWindowId).style.display = "none";
}
