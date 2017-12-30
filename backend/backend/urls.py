from django.conf.urls import url, include
from rest_framework import routers

from tasks.urls import router as tasks_router
from reports.urls import router as reports_router
from authentication.urls import router as auth_router


class DefaultRouter(routers.DefaultRouter):
    """
    Extends 'DefaultRouter' class to add a method for extending url routes from
    another router.
    """
    def extend(self, router):
        """Extend the routes with url routes to the passed in router.
        Args:
            router: A SimpleRouter instance containing route definisions.
        """
        self.registry.extend(router.registry)


router = DefaultRouter()
router.extend(tasks_router)
router.extend(reports_router)
router.extend(auth_router)

urlpatterns = [
    url(r'^api/', include(router.urls)),
    url(r'^api/accounts/', include('rest_framework.urls',
                                   namespace='rest_framework')),
]
