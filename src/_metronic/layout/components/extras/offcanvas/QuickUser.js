/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,no-undef */
import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import SVG from 'react-inlinesvg';
import { AiOutlineCloudDownload, AiOutlineCloudUpload, AiOutlinePoweroff } from 'react-icons/ai';
import { BsCreditCard } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import {
    BiGift, BiStore, BiSupport
} from 'react-icons/bi';
import Swal from 'sweetalert2';
import { UserContext } from '../../../../../app/modules/Auth/contexts/userProvider';
import { toAbsoluteUrl } from '../../../../_helpers';

// eslint-disable-next-line
export function QuickUser() {
    const history = useHistory();
    const { userStore } = useContext(UserContext);
    const { user } = userStore;
    const logoutClick = () => {
        const toggle = document.getElementById('kt_quick_user_toggle');
        if (toggle) {
            toggle.click();
        }
        history.push('/logout');
    };

    return (
        <div
          id="kt_quick_user"
          className="offcanvas offcanvas-right p-10"
        >
            <div className="offcanvas-header d-flex align-items-center justify-content-between">
                <button
                  type="button"
                  className="btn btn-light-primary btn-bold btn-md mt-2"
                  onClick={() => {
                      //   logoutClick();

                      Swal.fire({
                          title: 'Déconnexion',
                          text: 'Voulez-vous vraiment vous déconnecter ?',
                          icon: 'warning',
                          showCancelButton: false,
                          confirmButtonText: 'Se déconnecter'
                      }).then((result) => {
                          if (result.isConfirmed) {
                              logoutClick();
                          }
                      });
                  }}
                >
                    <AiOutlinePoweroff className="mr-2 text-md" />
                    Se déconnecter
                </button>
                <a
                  className="btn btn-xs btn-icon btn-light btn-hover-primary cursor-pointer"
                  id="kt_quick_user_close"
                >
                    <i className="ki ki-close icon-xs text-muted" />
                </a>
            </div>

            <div className="separator separator-dashed mt-8 mb-5" />

            <div className="offcanvas-content pr-5 mr-n5">
                <div className="navi navi-spacer-x-0 p-0">
                    <Link to="/user-profile" className="navi-item">
                        <div className="navi-link">
                            <div className="symbol symbol-40 bg-light mr-3">
                                <div className="symbol-label">
                                    <span className="svg-icon svg-icon-md svg-icon-primary text-primary">
                                        <SVG
                                          src={toAbsoluteUrl(
                                              '/media/svg/icons/Communication/Safe-chat.svg'
                                          )}
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className="navi-text">
                                <div className="font-weight-bold">Mon compte</div>
                                <div className="text-muted text-xs">
                                    Consultez l&apos;ensemble de vos informations
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/user/profile" className="navi-item">
                        <div className="navi-link">
                            <div className="symbol symbol-40 bg-light mr-3">
                                <div className="symbol-label">
                                    <span className="svg-icon svg-icon-md svg-icon-primary text-primary">
                                        <BsCreditCard />
                                    </span>
                                </div>
                            </div>
                            <div className="navi-text">
                                <div className="font-weight-bold">Abonnement</div>
                                <div className="text-muted text-xs">Consultez l&apos;ensemble de nos offres</div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/user/profile" className="navi-item">
                        <div className="navi-link">
                            <div className="symbol symbol-40 bg-light mr-3">
                                <div className="symbol-label">
                                    <span className="svg-icon svg-icon-md svg-icon-primary text-primary">
                                        <BiGift />
                                    </span>
                                </div>
                            </div>
                            <div className="navi-text">
                                <div className="font-weight-bold">Parainage</div>
                                <div className="text-muted text-xs">Consultez et gérez vos parainages</div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="separator separator-dashed my-7" />

                <div className="navi navi-spacer-x-0 p-0">
                    <Link to="/user-profile" className="navi-item">
                        <div className="navi-link">
                            <div className="symbol symbol-40 bg-light mr-3">
                                <div className="symbol-label">
                                    <span className="svg-icon svg-icon-md svg-icon-primary text-primary">
                                        <AiOutlineCloudUpload />
                                    </span>
                                </div>
                            </div>
                            <div className="navi-text">
                                <div className="font-weight-bold">Importer</div>
                                <div className="text-muted text-xs">
                                    Importez vos données grâce à nos models
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/user-profile" className="navi-item">
                        <div className="navi-link">
                            <div className="symbol symbol-40 bg-light mr-3">
                                <div className="symbol-label">
                                    <span className="svg-icon svg-icon-md svg-icon-primary text-primary">
                                        <AiOutlineCloudDownload />
                                    </span>
                                </div>
                            </div>
                            <div className="navi-text">
                                <div className="font-weight-bold">Exporter</div>
                                <div className="text-muted text-xs">
                                    Exportez facilement vos données
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/user/profile" className="navi-item">
                        <div className="navi-link">
                            <div className="symbol symbol-40 bg-light mr-3">
                                <div className="symbol-label">
                                    <span className="svg-icon svg-icon-md svg-icon-primary text-primary">
                                        <BiStore />
                                    </span>
                                </div>
                            </div>
                            <div className="navi-text">
                                <div className="font-weight-bold">Store</div>
                                <div className="text-muted text-xs">Consultez et profitez de nos offres</div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/user/profile" className="navi-item">
                        <div className="navi-link">
                            <div className="symbol symbol-40 bg-light mr-3">
                                <div className="symbol-label">
                                    <span className="svg-icon svg-icon-md svg-icon-primary text-primary">
                                        <BiSupport />
                                    </span>
                                </div>
                            </div>
                            <div className="navi-text">
                                <div className="font-weight-bold">Besoin d&apos;aide ?</div>
                                <div className="text-muted text-xs">Contactez nous et obtenez un retour rapide</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/user/profile" className="navi-item">
                        <div className="navi-link">
                            <div className="symbol symbol-40 bg-light mr-3">
                                <div className="symbol-label">
                                    <span className="svg-icon svg-icon-md svg-icon-primary text-primary">
                                        <FiSettings />
                                    </span>
                                </div>
                            </div>
                            <div className="navi-text">
                                <div className="font-weight-bold">Configuration</div>
                                <div className="text-muted text-xs">Administrez et configurez vos paramètres</div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
